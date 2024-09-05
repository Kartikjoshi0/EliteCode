'use client'
import { Button } from "./Button"

interface AppbarProps{
    user?: {
        name?: string | null
    },
    onSignin: any,
    onSignout: any,
    bgcolor: string
}

export const Appbar=({
    user,
    onSignin,
    onSignout,
    bgcolor
}: AppbarProps)=>{
    return <div className={`fixed  top-0 left-0 right-0  flex justify-between border-b px-4 ${bgcolor}` }>
    <div className="text-lg text-white flex justify-center items-center">
        <div className="text-white">Elite</div>
        <div className="text-green-500">Code</div>
    </div>
    <div className="flex  justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
    </div>
</div>
}