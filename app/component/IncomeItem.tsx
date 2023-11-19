import { User } from '@prisma/client';
import React from 'react'

interface Income {
        id:string;     
        title:string;
        content:string | null ;
        published?: boolean; 
        author:User ;    
        authorId:string | null;
       
}

const IncomeItem = ({id, title, content, published, author, authorId, }: Income) => {






  return (
    <div>
            <div>
                <h1>
                    
                    {title}
                </h1>
                <p>
                    {content as string }
                </p>
                <h2>
                    {published ? "Posted" : "Unposted"}
                </h2>
                <h2>
                    {author.name as string}
                    {author.email as string}
                    {authorId}
                   
                </h2>
            
            </div>





    </div>
  )
}

export default IncomeItem