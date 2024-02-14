import { Card, CardContent, CardDescription, CardHeader, CardMeta } from "semantic-ui-react";

 
function Cards({title}) { 
    return ( 
        <div>
                <Card>
                    <CardContent>
                        <CardHeader>{title}</CardHeader>
                     </CardContent>
                </Card>
        </div>
      );
    }
    
  
export default Cards;