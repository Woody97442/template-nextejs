"use server"; // Directive pour indiquer que ce fichier contient du code côté serveur.
import { prisma } from "@/prisma/prismaClient"; // Importation de l'instance Prisma pour interagir avec la base de données.

// Fonction asynchrone pour créer un exemple dans la base de données.
export const CreateExemple = async () => {
  try {
    // Tentative de création d'une entrée dans la table "exemple" via Prisma.
    await prisma.exemple.create({
      data: {
        key: "valeur", // Données insérées dans la table, ici un champ clé "key" avec la valeur "valeur".
      },
    });

    // Retourne un message de succès pour informer que l'opération a réussi.
    return { success: "Message afficher a l'utilisateur !" };
  } catch (error) {
    // En cas d'erreur, afficher le message d'erreur dans la console pour le débogage.
    console.error("Erreur lors de la création :", error);

    // Retourne un message d'erreur pour informer l'utilisateur qu'une erreur est survenue.
    return {
      error: "Une erreur s'est produite lors de la création.",
    };
  }
};