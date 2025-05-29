import { CircleDollarSign, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Ultimos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto h-4 w-4" />
        </div>
        <CardDescription>Novos Clientes nas ultimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Mikael-Kobama.png" />
            <AvatarFallback>Mk</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Mikael Kobama</p>
            <span className="text-[17px] sm:text-sm text-gray-400">
              Teste@teste.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Mikael-Kobama.png" />
            <AvatarFallback>Mk</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Mikael Kobama</p>
            <span className="text-[17px] sm:text-sm text-gray-400">
              Teste@teste.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Mikael-Kobama.png" />
            <AvatarFallback>Mk</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Mikael Kobama</p>
            <span className="text-[17px] sm:text-sm text-gray-400">
              Teste@teste.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
