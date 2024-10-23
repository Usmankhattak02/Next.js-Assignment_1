import { Card, Card2 } from "../../component/card"
import { PropTest, PropTest2 } from "../../component/propTest"

export default function HomePage() {
  return (
    <div className="bg-gray-400 h-screen  ">
      <h1 className="font-black text-white text-bold pb-90" >This is Home Page</h1>
      <br />
      <p className="bg-blue-400 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo totam, modi fuga cupiditate iste placeat quae laboriosam similique quo eius ipsa maxime ullam aliquam, sequi dignissimos. Voluptatum, dicta rerum!100

      </p>

      {/* <Card/>
     <Card2/>
     <PropTest  name = "Muhammad" cast="Usman"/>
     <PropTest2 name = "Aman" cast="Ullah"/>
     <PropTest name="Awais" cast="Aftab"/>
     <br />
     <PropTest2 name="Ahmed" cast="Ali"/> */}



    </div>


  )
}