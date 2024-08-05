import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '../components/ui/card.jsx'
  import * as React from "react"
  
  import { Button } from "../components/ui/button.jsx"
  import { Input } from "../components/ui/input.jsx"
  import { Label } from "../components/ui/label.jsx"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../components/ui/select.jsx"


  function Login(){ 
    return (
        <div className='container'>
        <Card className="w-[350px] mx-auto mt-24">
          <CardHeader>
            <CardTitle>Login Page</CardTitle>
            <CardDescription>Input your username and Password</CardDescription>
          </CardHeader>
          <CardContent>
            <form method='post'>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Name</Label>
                  <Input id="username" placeholder="username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
        </div>
        )
}
export default Login;
    