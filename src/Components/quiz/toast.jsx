import { useToast } from "../ui/use-toast"
import { Button } from "../ui/button"

export const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      className=""
      onClick={() => {
        toast({
          description: "Friday, February 10, 2023 at 5:57 PM",
          className:'rounded-[4px] text-[58px] bg-[#C4FFBF]'
        })
      }}
    >
      Show Toast
    </Button>
  )
}
