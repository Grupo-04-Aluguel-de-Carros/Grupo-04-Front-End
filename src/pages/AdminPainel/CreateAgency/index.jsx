import { useEffect, useState } from "react";

import {
  Container,
  Table,
  TableHead,
  TableTr,
  TableBody,
  TableTh,
  TableTd,
  TableButton,
  EditIconTable,
  DeleteIconTable,
  CarModalBg,
  CardModalHead,
  CarModalInfosBg,
  CarModalClose,
  CarModalLabel,
  CarModalInfosInputs,
  CarModalInput,
  CardInfosBtn,
  FormCreateCarSelect,
} from "./styles";

import { CustomButton } from "../../../components/Button/index";

import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function CreateAgency() {
  const [stores, setStores] = useState();
  const [brands, setBrands] = useState();

  const [store, setStore] = useState();
  const [brand, setBrand] = useState();

  const [cars, setCars] = useState();
  const [car, setCar] = useState();

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);

  const [storeId, setStoreId] = useState();
  const [storeAddressId, setStoreAddressId] = useState();
  const [storeName, setStoreName] = useState();
  const [storeCep, setStoreCep] = useState();
  const [storeStreet, setStoreStreet] = useState();
  const [storeCity, setStoreCity] = useState();
  const [storeState, setStoreState] = useState();
  const [storeNumber, setStoreNumber] = useState();
  const [storeNeighborhood, setStoreNeighborhood] = useState();
  const [storeComplement, setStoreComplement] = useState();

  async function getAllStores() {
    try {
      const allAddress = await api.get("/address");
      setStores(allAddress.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao carregar as agências, tente novamente mais tarde");
    }
  }

  async function deleteStore(id) {
    try {
      await api.delete(`/store/${id}`);
      toast.success(`Agência id ${id} removida com sucesso`);

      getAllStores();
    } catch (error) {
      toast.error(`Erro ao excluir agência id ${id}.`);
    }
  }

  async function getEditStore(data) {
    setOpenModalEdit(true);

    const storeRef = data.storeId;
    const addressRef = data.id;

    console.log(storeRef);
    console.log(addressRef);

    try {
      const responseStore = await api.get(`/store/${storeRef}`);
      const responseAddress = await api.get(`/address/${addressRef}`);

    //   console.log(responseStore.data);
    //   console.log(responseAddress.data);
      
      setStoreAddressId(responseAddress.data.id);
      setStoreId(responseStore.data.id);
      setStoreName(responseStore.data.name);
      setStoreCep(responseAddress.data.cep);
      setStoreStreet(responseAddress.data.street);
      setStoreCity(responseAddress.data.city);
      setStoreState(responseAddress.data.state);
      setStoreNumber(responseAddress.data.number);
      setStoreNeighborhood(responseAddress.data.neighborhood);
      setStoreComplement(responseAddress.data.complement);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateEditStore(e) {
    e.preventDefault();

    try {
      await api.put(`/store/${storeId}`, {
        name: storeName,
      });

      toast.success("Agência editada com sucesso");

      getAllStores();

      setOpenModalCreate(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao Editar o carro");
    }
  }

  async function handleCreateNewStore(e) {
    e.preventDefault();

    try {
      await api
        .post(`/store`, {
          name: storeName,
        })
        .then(async (response) => {
          await api.post(`/address`, {
            state: storeState,
            city: storeCity,
            street: storeStreet,
            number: storeNumber,
            neighborhood: storeNeighborhood,
            complement: storeComplement,
            cep: storeCep,
            storeId: response.data.message.id,
          });
          console.log(response.data.id);

          console.log();
        });

      toast.success("Agência cadastrada com sucesso");

      getAllStores();

      setOpenModalCreate(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar o carro");
    }
  }

  useEffect(() => {
    getAllStores();
  }, []);

  return (
    <>
      <Container>
        <CustomButton
          name="Criar agência"
          onClick={() => setOpenModalCreate(true)}
        />
        <Table>
          <TableHead>
            <TableTr>
              <TableTh>Cidade</TableTh>
              <TableTh>id da agência</TableTh>
              <TableTh>id do endereço</TableTh>
            </TableTr>
          </TableHead>

          <TableBody>
            {stores &&
              stores.map((data) => (
                <>
                  <TableTr key={data.id}>
                    <TableTd>{data.city}</TableTd>
                    <TableTd>{data.id}</TableTd>

                    <TableTd>{data.storeId}</TableTd>

                    <TableTd>
                      <TableButton onClick={() => getEditStore(data)}>
                        <EditIconTable />
                      </TableButton>
                      <TableButton onClick={() => deleteStore(data.id)}>
                        <DeleteIconTable />
                      </TableButton>
                    </TableTd>
                  </TableTr>
                </>
              ))}
          </TableBody>
        </Table>
      </Container>

      {openModalEdit ? (
        <CarModalBg>
          <CarModalInfosBg>
            <CardModalHead>
              <div />
              <CarModalClose onClick={() => setOpenModalEdit(false)} />
            </CardModalHead>

            <CarModalInfosInputs onSubmit={handleCreateEditStore}>
              <CarModalLabel>Nome da Agência:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o nome da agência"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />

              <CarModalLabel>Qual o estado da agência:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o estado da agência"
                value={storeState}
                onChange={(e) => setStoreState(e.target.value)}
              />

              <CarModalLabel>Qual a cidade?</CarModalLabel>
              <CarModalInput
                placeholder="Digite a cidade da agência"
                value={storeCity}
                onChange={(e) => setStoreCity(e.target.value)}
              />

              <CarModalLabel>O nome da rua:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o nome da rua"
                value={storeStreet}
                onChange={(e) => setStoreStreet(e.target.value)}
              />

              <CarModalLabel>Número?</CarModalLabel>
              <CarModalInput
                placeholder="Digite o número da agência"
                type="number"
                value={storeNumber}
                onChange={(e) => setStoreNumber(e.target.value)}
              />

              <CarModalLabel>Qual o bairro?</CarModalLabel>
              <CarModalInput
                placeholder="Digite o bairro"
                value={storeNeighborhood}
                onChange={(e) => setStoreNeighborhood(e.target.value)}
              />

              <CarModalLabel>CEP:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o CEP"
                value={storeCep}
                onChange={(e) => setStoreCep(e.target.value)}
              />

              <CardInfosBtn type="submit">Cadastrar</CardInfosBtn>
            </CarModalInfosInputs>
          </CarModalInfosBg>
        </CarModalBg>
      ) : (
        <></>
      )}

      {openModalCreate ? (
        <CarModalBg>
          <CarModalInfosBg>
            <CardModalHead>
              <div></div>
              <CarModalClose onClick={() => setOpenModalCreate(false)} />
            </CardModalHead>

            <CarModalInfosInputs onSubmit={handleCreateNewStore}>
              <CarModalLabel>Nome da Agência:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o nome da agência"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />

              <CarModalLabel>Qual o estado da agência:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o estado da agência"
                value={storeState}
                onChange={(e) => setStoreState(e.target.value)}
              />

              <CarModalLabel>Qual a cidade?</CarModalLabel>
              <CarModalInput
                placeholder="Digite a cidade da agência"
                value={storeCity}
                onChange={(e) => setStoreCity(e.target.value)}
              />

              <CarModalLabel>O nome da rua:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o nome da rua"
                value={storeStreet}
                onChange={(e) => setStoreStreet(e.target.value)}
              />

              <CarModalLabel>Número?</CarModalLabel>
              <CarModalInput
                placeholder="Digite o número da agência"
                type="number"
                value={storeNumber}
                onChange={(e) => setStoreNumber(e.target.value)}
              />

              <CarModalLabel>Qual o bairro?</CarModalLabel>
              <CarModalInput
                placeholder="Digite o bairro"
                value={storeNeighborhood}
                onChange={(e) => setStoreNeighborhood(e.target.value)}
              />

              <CarModalLabel>Complemento</CarModalLabel>
              <CarModalInput
                placeholder="Complemento do endereço"
                value={storeComplement}
                onChange={(e) => setStoreComplement(e.target.value)}
              />

              <CarModalLabel>CEP:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o CEP"
                value={storeCep}
                onChange={(e) => setStoreCep(e.target.value)}
              />

              <CardInfosBtn type="submit">Cadastrar</CardInfosBtn>
            </CarModalInfosInputs>
          </CarModalInfosBg>
        </CarModalBg>
      ) : (
        <></>
      )}
    </>
  );
}
