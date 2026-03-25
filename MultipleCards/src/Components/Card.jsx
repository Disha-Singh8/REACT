import {Bookmark} from 'lucide-react'

let Card =(props)=>{
    return(
       
            <div className ='Card'> 
                <div className="top">
                    <img src={props.logo} alt="company" />
                    <button>Add <Bookmark size = '12px' /> </button>
                </div>

                <div className = 'center'> 
                    <h3>{props.company} <span>{props.datePosted}</span></h3>
                    <h2>{props.post} </h2>

                    <div className = 'mid'>
                        <h3>{props.tag1}</h3>
                        <h3>{props.tag2}</h3>
                    </div>
                </div>

                <div className = 'bottom'>
                    <div>

                    <p>$ {props.pay}</p>
                    <p>{props.loca}</p>
                    </div>
                    <button>Apply</button>
                </div>
            </div>
        
    )
}

export default Card