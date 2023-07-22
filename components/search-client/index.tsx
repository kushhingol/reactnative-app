import React, { useEffect, useState } from "react";
import { ClientDetailsDocType } from "../../screens/upsell/upsell-form";
import { useForm } from "../../hooks/useForm";
import { useDebounce } from "../../hooks/useDebounce";
import { ClientDetailsType, ClientServices } from "../../services/client";
import { SearchBarListField } from "../shared/search-bar-list-field";
import { ClientSearchList } from "../../screens/upsell/upsell-form/ClientSearchList";
import { useTheme } from "react-native-magnus";
import { getTabColorConfig } from "../../constants";

interface IProps {
  handleSearchListItemClick: (clientDetails: ClientDetailsDocType) => void;
}

export const SearchClient = ({ handleSearchListItemClick }: IProps) => {
  const [searchList, setSearchList] = useState<ClientDetailsDocType[]>([]);
  const [showList, setShowList] = useState<boolean>(false);

  const { handleFormValueChange, getFormFieldsError, formValues, seedValues } =
    useForm({
      searchClient: {
        value: "",
      },
    });

  const debounceValue = useDebounce(formValues.searchClient, 1000);

  const handleListItemClick = (clientDetails: ClientDetailsDocType) => {
    setShowList(false);
    handleSearchListItemClick(clientDetails);
    seedValues({
      searchClient: "",
    });
  };

  useEffect(() => {
    if (debounceValue) {
      console.log(debounceValue);
      ClientServices.searchClient(debounceValue).then((snapshot) => {
        const formattedSearchList: ClientDetailsDocType[] = [];
        snapshot.forEach((snap) => {
          snap.forEach((doc) => {
            const data = doc.data() as ClientDetailsType;

            // Format the data as needed
            const formattedItem: ClientDetailsDocType = {
              id: doc.id,
              ...data,
            };
            const isDocKeyPresent = formattedSearchList.find(
              (searchListItem) => searchListItem.id === doc.id
            );
            if (!isDocKeyPresent) {
              formattedSearchList.push(formattedItem);
            }
          });
        });
        setSearchList(formattedSearchList);
        setShowList(true);
      });
    } else {
      setSearchList([]);
    }
  }, [debounceValue]);

  return (
    <SearchBarListField
      show={showList}
      formKey="searchClient"
      handleFormValueChange={handleFormValueChange}
      placeholder="Search Client"
      p={10}
      focusBorderColor="green700"
      error={getFormFieldsError("searchClient")}
      value={formValues["searchClient"]}
      SearchListComponent={
        <ClientSearchList
          searchListData={searchList}
          key={"search-client-list"}
          onListItemClick={handleListItemClick}
        />
      }
    />
  );
};
