import { api } from "@/lib/axios";
export interface updateProfileProps {
    name: string;
    description: string | null;
}
export async function updateProfile({ name, description }: updateProfileProps){
    await api.put('/profile', {
        name,
        description
    })
}