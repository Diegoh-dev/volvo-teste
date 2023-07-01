
interface LearnProps{
  params:{
    id:string;
  }
}

export default function Learn({params}:LearnProps){
  return(

    <div>
      Next 13 {params.id}
    </div>
  )
}