"use server";
import { Exemple } from "@/lib/type";
import { prisma } from "@/prisma/prismaClient";

/**
 * Récupère tous les exemples depuis la base de données.
 *
 * @async
 * @function GetAllExemples
 * @returns {Promise<Exemple[] | null>} Une promesse contenant la liste des exemples ou `null` en cas d'erreur.
 */
export const GetAllExemples = async (): Promise<Exemple[] | null> => {
  try {
    // Récupère tous les enregistrements de la table "exemple".
    const data = await prisma.exemple.findMany();
    return data; // Retourne la liste des exemples.
  } catch (error) {
    // En cas d'erreur, retourne null.
    console.error("Erreur lors de la récupération des exemples :", error);
    return null;
  }
};
