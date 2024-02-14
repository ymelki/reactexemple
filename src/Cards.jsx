import { Card, CardContent, CardDescription, CardHeader, CardMeta } from "semantic-ui-react";

 
function Cards() { 
    return ( 
        <div>
                <Card>
                    <CardContent>
                        <CardHeader>Matthew Harris</CardHeader>
                        <CardMeta>Co-Worker</CardMeta>
                        <CardDescription>
                        Matthew is a pianist living in Nashville.
                        </CardDescription>
                    </CardContent>
                </Card>
        </div>
      );
    }
    
  
export default Cards;