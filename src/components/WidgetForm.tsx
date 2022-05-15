import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/Bug.svg';
import ideaImageUrl from '../assets/Idea.svg';
import thoughtImageUrl from '../assets/Thought.svg';

export function WidgetForm(){
    const feedbackTypes ={
        BUG:{
            title:'Problem',
            image:{
                source:bugImageUrl,
                alt:'Image of a insect'
            },
        },
        IDEA:{
            title:'Idea',
            image:{
                source:ideaImageUrl,
                alt:'Image of the lamp'
            },
        },
        OTHER:{
            title:'Other',
            image:{
                source:thoughtImageUrl,
                alt:'image of a think cloud'
            },
        },
    }
    // Object.entries(feedbackTypes) => [[]]
    return(
        <div className="bg-zinc-900 relative rounded-2xl mb-4 p-4 flex flex-col items-center shadow-lg">
            <span className="text-xl leading-6">Give your feedback</span>
            <CloseButton />
            <button className="flex py-8 items-center gap-2 w-full flex-1">
               {Object.entries(feedbackTypes).map(([key,value]) =>{
                   return(
                        <button 
                        key={key} 
                        className="bg-zinc-800 flex flex-col items-center  py-5 w-24 rounded-lg "
                        >
                           <img src={value.image.source} alt={value.image.alt} />
                           <span>{value.title}</span>
                       </button>
                   )
               })}
            </button>
            <footer className="text-xst text-neutral-400">
               Make with ♥ by <a href="https://www.linkedin.com/in/feelipesantana/" className="underline underline-offset-2">Felipe Santana</a>
            </footer>
        </div>
    )
}