import prismaClient from "../prisma";

interface DeleteCustomerServiceProps{
    id: string;
}

class DeleteCustomerService{
    async execute({id}: DeleteCustomerServiceProps){
        if(!id){
            throw new Error("Solicitação inválida")
        };

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        });

        if(!findCustomer){
            throw new Error("Cliente não existe")
        };

        await prismaClient.customer.delete({
            where: {
                id: id
            }
        });

        return { message: "deletado com sucesso" }
    };
};

export { DeleteCustomerService }