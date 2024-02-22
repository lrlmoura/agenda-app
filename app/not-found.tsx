import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Não encontramos a página </h2>
      <p>Parece que essa página não exise mais!</p>
      <Link href="/">Voltar a Home</Link>
    </div>
  )
}