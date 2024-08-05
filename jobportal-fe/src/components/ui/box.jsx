import * as React from "react"
 
import { Button } from "./button.jsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card.jsx"
import { Input } from "./input.jsx"
import { Label } from "./label.jsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select.jsx"
 
export function Box() {
return(
    <Card className="mx-4">
        <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description <span className="font-bold">Full time</span></CardDescription>
     </CardHeader>
</Card>

)
}
export default Box;
