import { api } from "@/lib/axios";

export interface GetManagedRestaurantProps {
    id: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function GetManagedRestaurant(){
    
    const response = await api.get<GetManagedRestaurantProps>('/managed-restaurant');
    return response.data;
    
}