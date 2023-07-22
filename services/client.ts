import firebase from "../config/firebaseConfig";

export type ClientDetailsType = {
  clientName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pinCode: string;
  phoneNumber: string;
  email: string;
};

export interface UpsellDetailsType extends ClientDetailsType {
  clientId: string;
  modelNumber: string;
  sellingPrice: string;
  buybackPrice?: string;
  serialNumber?: string;
  quotedPrice?: string;
}

const clientDetailsDb = firebase?.firestore?.().collection("client-details");

const upsellDetailsDb = firebase?.firestore?.().collection("upsell");

export const ClientServices = {
  addClient(clientDetails: ClientDetailsType) {
    return clientDetailsDb.add(clientDetails);
  },

  removeClient(clientId: string) {
    return clientDetailsDb.doc(clientId).delete();
  },

  removeClientByFilters(filterName: string, filterValue: string) {
    return clientDetailsDb
      .where(filterName, "==", filterValue)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
      });
  },

  searchClient(filterValue: string) {
    const clientNameFilter = clientDetailsDb
      .where("clientName", ">=", filterValue)
      .where("clientName", "<=", filterValue + "\uf8ff")
      .get();
    const address1Filter = clientDetailsDb
      .where("address1", ">=", filterValue)
      .where("address1", "<=", filterValue + "\uf8ff")
      .get();
    const address2Filter = clientDetailsDb
      .where("address2", ">=", filterValue)
      .where("address2", "<=", filterValue + "\uf8ff")
      .get();
    const phoneNumberFilter = clientDetailsDb
      .where("phoneNumber", ">=", filterValue)
      .where("phoneNumber", "<=", filterValue + "\uf8ff")
      .get();
    const emailFilter = clientDetailsDb
      .where("email", ">=", filterValue)
      .where("email", "<=", filterValue + "\uf8ff")
      .get();
    const cityFilter = clientDetailsDb
      .where("city", ">=", filterValue)
      .where("city", "<=", filterValue + "\uf8ff")
      .get();
    const pinCodeFilter = clientDetailsDb
      .where("pinCode", ">=", filterValue)
      .where("pinCode", "<=", filterValue + "\uf8ff")
      .get();
    const stateFilter = clientDetailsDb
      .where("state", ">=", filterValue)
      .where("state", "<=", filterValue + "\uf8ff")
      .get();

    return Promise.all([
      clientNameFilter,
      phoneNumberFilter,
      emailFilter,
      address1Filter,
      address2Filter,
      cityFilter,
      pinCodeFilter,
      stateFilter,
    ]);
  },
};

export const UpsellServices = {
  addUpsell(upsellDetails: UpsellDetailsType) {
    return upsellDetailsDb.add(upsellDetails);
  },

  removeUpsellDetails(upsellDetailsId: string) {
    return upsellDetailsDb.doc(upsellDetailsId).delete();
  },

  removeUpsellByFilters(filterName: string, filterValue: string) {
    return upsellDetailsDb
      .where(filterName, "==", filterValue)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
      });
  },
};
