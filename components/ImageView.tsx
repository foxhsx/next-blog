'use client'

import { PhotoView, PhotoProvider } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

export default function ImageView({ src }: { src: string | undefined }) {
  return (
    <>
      <PhotoProvider loop={false} maskOpacity={0.3}>
        <PhotoView src={src}>
          <img src={src} />
        </PhotoView>
      </PhotoProvider>
    </>
  )
}
