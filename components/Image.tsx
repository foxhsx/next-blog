import { ImgHTMLAttributes } from 'react'

const Image = ({ ...rest }: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => <img {...rest} />

export default Image
