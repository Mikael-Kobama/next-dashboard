import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>Total vendas em 90 dias</CardDescription>
          </CardHeader>
          <CardHeader>
            <p className="text-base sm:text-lg font-bold"> R$ 40.000</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>Novos Clientes em 90 dias</CardDescription>
          </CardHeader>
          <CardHeader>
            <p className="text-base sm:text-lg font-bold"> 237</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Pedidos Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>Total de pedidos hoje</CardDescription>
          </CardHeader>
          <CardHeader>
            <p className="text-base sm:text-lg font-bold"> 68</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                Total de Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>Total de pedidos em 30 dias</CardDescription>
          </CardHeader>
          <CardHeader>
            <p className="text-base sm:text-lg font-bold"> 3639</p>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
