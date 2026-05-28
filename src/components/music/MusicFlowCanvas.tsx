import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  r: number
  color: string
  label: string
  phase: number
}

const points: Point[] = [
  { x: 0.5, y: 0.32, r: 22, color: '#2bb3ff', label: 'Host', phase: 0 },
  { x: 0.22, y: 0.58, r: 15, color: '#c8ff4d', label: 'Listener', phase: 1.2 },
  { x: 0.78, y: 0.58, r: 15, color: '#c8ff4d', label: 'Listener', phase: 2.4 },
  { x: 0.5, y: 0.78, r: 14, color: '#e8c86a', label: 'Artist', phase: 3.1 },
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

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.48,
        20,
        width * 0.5,
        height * 0.48,
        width * 0.58,
      )
      gradient.addColorStop(0, 'rgba(43,179,255,0.18)')
      gradient.addColorStop(0.45, 'rgba(200,255,77,0.08)')
      gradient.addColorStop(1, 'rgba(6,21,45,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const scaled = points.map((point) => ({
        ...point,
        x: point.x * width,
        y: point.y * height,
      }))

      ctx.lineCap = 'round'
      for (let i = 1; i < scaled.length; i += 1) {
        const from = scaled[0]
        const to = scaled[i]
        ctx.strokeStyle = i === 3 ? 'rgba(232,200,106,0.38)' : 'rgba(43,179,255,0.32)'
        ctx.lineWidth = i === 3 ? 2 : 3
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.quadraticCurveTo(width * 0.5, height * 0.5, to.x, to.y)
        ctx.stroke()
      }

      scaled.forEach((point) => {
        const pulse = 1 + Math.sin(frame * 0.035 + point.phase) * 0.08
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r * 1.9 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `${point.color}22`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.shadowColor = point.color
        ctx.shadowBlur = 24
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r * 0.42, 0, Math.PI * 2)
        ctx.fillStyle = '#06152d'
        ctx.fill()
        drawLabel(ctx, point.label, point.x, point.y + point.r + 22)
      })

      const orbit = (frame * 0.018) % (Math.PI * 2)
      for (let i = 0; i < 3; i += 1) {
        const angle = orbit + i * ((Math.PI * 2) / 3)
        const x = width * 0.5 + Math.cos(angle) * width * 0.2
        const y = height * 0.53 + Math.sin(angle) * height * 0.14
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = i === 0 ? '#e6007a' : '#ffffff'
        ctx.fill()
      }

      frame += 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="music-flow-canvas" aria-hidden="true" />
}
