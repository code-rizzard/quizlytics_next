import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import {redirect} from  'next/navigation'



export default async function Home() {
  const session =  await getServerSession(authOptions)
  // const session = useSession()
  if(!session) {
    redirect('/signin')
  }
  return (
    <main 
    className="">
      Home 
      <pre>{`${JSON.stringify(session) }`}</pre>
    </main>
  )
}
