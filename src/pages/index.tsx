import Head from "./layout/components/Header";
import Navigation from "./layout/components/Navigation";
export default function Home() {
  return (
    <main className="ml-4 mr-4 ">
      <header>
        <Head/>  
        <Navigation/>
      </header>
    </main>
  )
}
