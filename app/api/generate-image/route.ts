import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const width = searchParams.get('width') || '800'
  const height = searchParams.get('height') || '600'

  if (!query) {
    return new NextResponse('Missing query parameter', { status: 400 })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: query,
        n: 1,
        size: `${width}x${height}`,
        style: 'vivid',
        quality: 'standard',
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to generate image')
    }

    const data = await response.json()
    const imageUrl = data.data[0].url

    // Fetch the generated image
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()

    // Return the image with appropriate headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error generating image:', error)
    return new NextResponse('Error generating image', { status: 500 })
  }
} 