import './style.css'
import { CardsItem } from './CardsItems/CardsComponents'
export const CardsComponents = ()=>{
    return(
        <section class ='CardsComponents'>
        <h1> What they’ve said </h1>
        <div class='GalleryCards'>
            
        <CardsItem 
        Name = 'Anisha Li'
        AvatarImg = 'anisha'
        DescriptionCards='Manage has supercharged our team’s workflow. The ability to maintain 
        visibility on larger milestones at all times keeps everyone motivated.'
        />
        <CardsItem 
        Name = ' Ali Bravo'
        AvatarImg = 'ali'
        DescriptionCards='We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.'
        />
        <CardsItem 
        Name = 'Richard Watts'
        AvatarImg = 'richadr'
        DescriptionCards='Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!'
        />
        <CardsItem 
        Name = 'Shanai Gough'
        AvatarImg = 'shanai'
        DescriptionCards='Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.'
        />
        </div>
        
        <button>Get Started</button>

        </section>
    )
}