import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardMeta } from "semantic-ui-react";

 
function Cards({title}) { 

     return (  
                <Card>
                    <CardContent>
                    <Link to={`/service/${title}`} className="card-link">
                        <CardHeader>{title}</CardHeader>
                    </Link> 
                    </CardContent>
                </Card>
 
      );
    }
    
  
export default Cards;