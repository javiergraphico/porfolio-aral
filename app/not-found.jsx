import Link from "next/link";


export const metadata = {
  title: 'Página no encontrada',
}





export default function NotFound() {
  return(
    <>
      <h2>Página no encontrada</h2>
      <Link href="/">Volver al inicio</Link>
    </>
  )
}