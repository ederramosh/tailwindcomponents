import { redirect } from 'next/navigation';

export default function Home() {
  
  redirect('./profile/main');
  
  return (
    <>
      <span>Hola Mundo</span>
    </>
  )
}
