import {create} from 'zustand'

export type Fields = {
   envergure_territoriale?: string;
   code_insee_commune?: string;
   geocodage_xy?: [number, number];
   complement_d_adresse_facultatif?: string;
   type_de_voie_rue_avenue_boulevard_etc?: string;
   annee_de_creation_du_festival?: string;
   periode_principale_de_deroulement_du_festival?: string;
   discipline_dominante?: string;
   nom_du_festival?: string;
   libelle_epci_collage_en_valeur?: string;
   commune_principale_de_deroulement?: string;
   region_principale_de_deroulement?: string;
   code_insee_epci_collage_en_valeur?: string;
   adresse_postale?: string;
   departement_principal_de_deroulement?: string;
   numero_de_voie?: string;
   identifiant?: string;
   code_postal_de_la_commune_principale_de_deroulement?: string;
   site_internet_du_festival?: string;
   adresse_e_mail?: string;
   nom_de_la_voie?: string;
   decennie_de_creation_du_festival?: string;
   sous_categorie_arts_visuels_et_arts_numeriques?: string;
   sous_categorie_livre_et_litterature?: string;
   // Add more fields as needed
};
export type Festival = {
   datasetid?: string;
   recordid?: string;
   _id?:string;
   fields?: Fields
   geometry?: {
      type?: string;
      coordinates?: [number, number];
   };
   record_timestamp?: string;
}
//
// router.get('/', getAllFestival);
// router.get('/dpt', getFestivalByDpt) => body = "dpt": string
//

// export class FestivalFactory {
//    private readonly _fields: Fields
//    private readonly _recordid: string
//    private readonly _datasetid: string

//    constructor({fields, recordid, datasetid}: Festival) {
//       this._fields = fields
//       this._recordid = recordid
//       this._datasetid = datasetid
//    }

//    get fields(): Fields {
//       return this._fields
//    }

//    get recordid(): string {
//       return this._recordid
//    }

//    get datasetid(): string {
//       return this._datasetid
//    }

//    public static create({fields, recordid, datasetid}: Festival): FestivalFactory {
//       return new FestivalFactory({fields, recordid, datasetid})
//    }
// }


type LocalStoreTypes = {
   // getters
   festivals: Festival[] | null
   festivalsByDpt: Festival[] | null

   // setters
   setFestivals: (festivals: Festival[] | null) => void
   setFestivalsByDpt: (festivals: Festival[] | null) => void
}
export const useStore = create<LocalStoreTypes>(set => ({
   festivals: null,
   festivalsByDpt: null,
   setFestivals: (festivals) => set({festivals}),
   setFestivalsByDpt: (festivals) => set({festivalsByDpt: festivals}),
}))
