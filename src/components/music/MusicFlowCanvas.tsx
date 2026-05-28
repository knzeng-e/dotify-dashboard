import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  r: number
  color: string
  label: string
  phase: number
}

// y-positions keep the composition centroid at ~0.40, centred in the visible
// area above the caption overlay (which covers the bottom ~20% of the card).
const points: Point[] = [
  { x: 0.5,  y: 0.24, r: 22, color: '#2bb3ff', label: 'Host',     phase: 0   },
  { x: 0.22, y: 0.56, r: 15, color: '#c8ff4d', label: 'Listener', phase: 1.2 },
  { x: 0.78, y: 0.56, r: 15, color: '#c8ff4d', label: 'Listener', phase: 2.4 },
  { x: 0.5,  y: 0.72, r: 14, color: '#e8c86a', label: 'Artist',   phase: 3.1 },
]

function drawLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
) {
  ctx.font = '600 13px Inter, system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.82)'
  ctx.textAlign = 'center'
  ctx.fillText(text, x, y)
}

export default function MusicFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let frame = 0
    let raf = 0
    // Track CSS dimensions so draw() never calls getBoundingClientRect in the hot path
    let cssW = 0
    let cssH = 0

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (w === 0 || h === 0) return
      cssW = w
      cssH = h
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const w = cssW
      const h = cssH
      if (w === 0 || h === 0) {
        raf = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, w, h)

      // Background glow centred on composition midpoint
      const cx = w * 0.5
      const cy = h * 0.40
      const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, w * 0.58)
      gradient.addColorStop(0,    'rgba(43,179,255,0.18)')
      gradient.addColorStop(0.45, 'rgba(200,255,77,0.08)')
      gradient.addColorStop(1,    'rgba(6,21,45,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      const scaled = points.map((p) => ({ ...p, x: p.x * w, y: p.y * h }))

      // Connection lines
      ctx.lineCap = 'round'
      for (let i = 1; i < scaled.length; i += 1) {
        const from = scaled[0]
        const to   = scaled[i]
        ctx.strokeStyle = i === 3 ? 'rgba(232,200,106,0.38)' : 'rgba(43,179,255,0.32)'
        ctx.lineWidth   = i === 3 ? 2 : 3
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.quadraticCurveTo(w * 0.5, h * 0.45, to.x, to.y)
        ctx.stroke()
      }

      // Nodes
      scaled.forEach((p) => {
        const pulse = 1 + Math.sin(frame * 0.035 + p.phase) * 0.08

        // Outer glow ring
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 1.9 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}22`
        ctx.fill()

        // Node body
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle    = p.color
        ctx.shadowColor  = p.color
        ctx.shadowBlur   = 24
        ctx.fill()
        ctx.shadowBlur = 0

        // Centre dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 0.42, 0, Math.PI * 2)
        ctx.fillStyle = '#06152d'
        ctx.fill()

        drawLabel(ctx, p.label, p.x, p.y + p.r + 22)
      })

      // Orbiting particles
      const orbit = (frame * 0.018) % (Math.PI * 2)
      for (let i = 0; i < 3; i += 1) {
        const angle = orbit + i * ((Math.PI * 2) / 3)
        const px = w * 0.5  + Math.cos(angle) * w * 0.2
        const py = h * 0.40 + Math.sin(angle) * h * 0.14
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#e6007a' : '#ffffff'
        ctx.fill()
      }

      frame += 1
      raf = requestAnimationFrame(draw)
    }

    // ResizeObserver tracks every size change (grid relayout, font load, etc.)
    const ro = new ResizeObserver(() => resize())
    ro.observe(canvas)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="music-flow-canvas" aria-hidden="true" />
}
