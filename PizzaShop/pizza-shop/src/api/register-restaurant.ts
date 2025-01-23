import { api } from "@/lib/axios";

interface RegisterRestaurantProps{
    restaurantName: string;
    managerName: string;
    email: string;
    phone: string;
}

export async function registerRestaurant({ email, phone, restaurantName, managerName }: RegisterRestaurantProps){
    throw new Error()
    await api.post('/restaurants', {
        email,
        phone,
        restaurantName,
        managerName,
    })
}