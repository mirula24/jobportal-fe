import { Button } from "../components/ui/button.jsx"
import { Label } from "../components/ui/label.jsx"
import { Input } from "../components/ui/input.jsx"
import { Checkbox } from "../components/ui/checkbox.jsx"
import { Box } from "../components/ui/box.jsx"


function JobList(){
    return(
        <div className="container">
                <div className="bg-blue-500 flex">
                        <Label className="text-2xl p-4 text-white" >
                        <span className="font-bold ">GitHub</span> Jobs
                        </Label>
                    </div>
                     <div className="flex px-4">
                        <div className="py-4 mx-auto w-1/3">
                        <Label htmlFor="jobdescription" className="text-xl mt-8 pl-2">Job Descriptin </Label>
                        <Input id="description" placeholder="description" className="w-[250]" />
                        </div>
                        <div className="py-4 mx-auto w-1/3">
                        <Label htmlFor="location" className="text-xl mt-8 pl-2">Location </Label>
                        <Input id="location" placeholder="Location" className="w-[250]" />
                    </div>
                    <div className="w-1/3 py-8 flex">
                        <div className="flex items-center space-x-2">
                     <Checkbox id="fulltime"/>
                        <label htmlFor="fulltime" className="text-sm font-medium 
                        leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Full-time
                        </label>
                    </div>
                    <div className="mx-auto">
                        <Button className="bg-blue-400">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
            <div>
            <Box></Box>
            </div>
        </div>


    )
}

export default JobList;