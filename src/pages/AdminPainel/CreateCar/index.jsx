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

export function CreateCar() {
  const [stores, setStores] = useState();
  const [brands, setBrands] = useState();

  const [store, setStore] = useState();
  const [brand, setBrand] = useState();

  const [cars, setCars] = useState();
  const [car, setCar] = useState();

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);

  const [carId, setCarId] = useState();
  const [carName, setCarName] = useState();
  const [carValue, setCarValue] = useState();
  const [carYear, setCarYear] = useState();
  const [carDescription, setCarDescription] = useState();
  const [carColor, setCarColor] = useState();
  const [carModel, setCarModel] = useState();

  async function getAllBrandsAndStore() {
    try {
      const responseStores = await api.get("/store/");

      const responseBrands = await api.get("/brand");

      setStores(responseStores.data.data);
      setBrands(responseBrands.data.brands);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllCars() {
    try {
      const allCars = await api.get("/car");
      setCars(allCars.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao carregar os carros, tente novamente mais tarde");
    }
  }

  async function deleteCar(id) {
    try {
      await api.delete(`/car/${id}`);

      getAllCars();
    } catch (error) {
      toast.error(error);
    }
  }

  async function getEditCar(carId) {
    setOpenModalEdit(true);
    console.log(carId)

    try {
      const response = await api.get(`/car/${carId.id}`);
      setCar(response.data);

      setCarId(response.data.id);
      setCarName(response.data.name);
      setCarValue(response.data.value);
      setCarYear(response.data.year);
      setCarDescription(response.data.description);

    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditCar(e) {
    e.preventDefault();

    const objectCar = {
      name: carName,
      value: Number(carValue),
      year: carYear,
      description: carDescription,
      color: carColor,
      model: carModel,
      available: true,
      storeId: store,
      brandId: brand,
    };

    try {
      await api.put(`/car/${carId}`, objectCar);

      console.log(objectCar);

      setOpenModalEdit(false);

      toast.success("Carro editado com sucesso");

      setCarId();
      setCarName();
      setCarValue();
      setCarYear();
      setCarDescription();
      getAllCars();
    } catch (error) {
      console.log(error);

      setCarId("");
      setCarName("");
      setCarValue("");
      setCarYear("");
      setCarDescription("");
    }
  }

  async function handleCreateNewCar(e) {
    e.preventDefault();

    const objectCar = {
      name: carName,
      value: Number(carValue),
      year: carYear,
      description: carDescription,
      color: carColor,
      model: carModel,
      available: true,
      storeId: store,
      brandId: brand,
    };

    try {
      await api.post(`/car`, objectCar);

      toast.success("Carro cadastrado com sucesso");
      getAllCars();
      setOpenModalCreate(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar o carro");
    }

    console.log(objectCar);
  }

  useEffect(() => {
    getAllCars();
    getAllBrandsAndStore();
  }, []);

  return (
    <>
      <Container>
        <CustomButton
          name="Cadastrar Carro"
          onClick={() => setOpenModalCreate(true)}
        />
        <Table>
          <TableHead>
            <TableTr>
              <TableTh>Nome</TableTh>
              <TableTh>Modelo</TableTh>
              <TableTh>Cor</TableTh>
              <TableTh>Valor</TableTh>
              <TableTh>Ano</TableTh>
            </TableTr>
          </TableHead>

          <TableBody>
            {cars &&
              cars.map((data) => (
                <>
                  <TableTr key={data.id}>
                    <TableTd>{data.name}</TableTd>
                    <TableTd>{data.model}</TableTd>
                    <TableTd>{data.color}</TableTd>
                    <TableTd>R$: {data.value}</TableTd>
                    <TableTd>{data.year}</TableTd>
                    <TableTd>{data.Store ? data.Store.name : 'ok' }</TableTd>
                    <TableTd>
                      <TableButton onClick={() => getEditCar(data)}>
                        <EditIconTable />
                      </TableButton>
                      <TableButton onClick={() => deleteCar(data.id)}>
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
              <div></div>
              <CarModalClose onClick={() => setOpenModalEdit(false)} />
            </CardModalHead>

            <CarModalInfosInputs onSubmit={handleEditCar}>
              {car && (
                <>
                  <CarModalLabel>id:</CarModalLabel>
                  <CarModalInput value={carId} />
                  <CarModalLabel>Nome do Carro:</CarModalLabel>
                  <CarModalInput
                    placeholder="Digite o nome do carro"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                  />
                  <CarModalLabel>Valor da diária:</CarModalLabel>
                  <CarModalInput
                    value={carValue}
                    type="number"
                    onChange={(e) => setCarValue(e.target.value)}
                  />
                  <CarModalLabel>Ano do carro:</CarModalLabel>
                  <CarModalInput
                    value={carYear}
                    type="number"
                    onChange={(e) => setCarYear(e.target.value)}
                  />
                  <CarModalLabel>Descrição:</CarModalLabel>
                  <CarModalInput
                    value={carDescription}
                    onChange={(e) => setCarDescription(e.target.value)}
                  />

                  <FormCreateCarSelect
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                  >
                    <option value="" selected disabled hidden>
                      SELECIONE A AGENCIA
                    </option>
                    {stores ? (
                      stores.map((data) => (
                        <>
                          <option
                            value={data.id}
                            onChange={(e) => setStore(e.target.value)}
                          >
                            {data.name}
                          </option>
                        </>
                      ))
                    ) : (
                      <></>
                    )}
                  </FormCreateCarSelect>

                  <FormCreateCarSelect
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="" selected disabled hidden>
                      SELECIONE A MARCA DO CARRO
                    </option>
                    {brands ? (
                      brands.map((data) => (
                        <>
                          <option value={data.id}>{data.name}</option>
                        </>
                      ))
                    ) : (
                      <></>
                    )}
                  </FormCreateCarSelect>
                </>
              )}
              <CardInfosBtn type="submit">Salvar</CardInfosBtn>
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

            <CarModalInfosInputs onSubmit={handleCreateNewCar}>
              <CarModalLabel>Nome do Carro:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o nome do carro"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
              <CarModalLabel>Valor da diária:</CarModalLabel>
              <CarModalInput
                placeholder="Digite um valor para o carro"
                value={carValue}
                type="number"
                onChange={(e) => setCarValue(e.target.value)}
              />

              <CarModalLabel>Ano do carro:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o ano do carro"
                type="number"
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
              />

              <CarModalLabel>Modelo do carro:</CarModalLabel>
              <CarModalInput
                placeholder="Digite o modelo do carro"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />

              <CarModalLabel>Qual a cor do carro?</CarModalLabel>
              <CarModalInput
                placeholder="Digite a cor do carro"
                value={carColor}
                onChange={(e) => setCarColor(e.target.value)}
              />

              <CarModalLabel>Descrição:</CarModalLabel>
              <CarModalInput
                placeholder="Digite a descrição do carro"
                value={carDescription}
                onChange={(e) => setCarDescription(e.target.value)}
              />

              <CarModalLabel>Seleciona a agência do carro:</CarModalLabel>

              <FormCreateCarSelect
                value={store}
                onChange={(e) => setStore(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  SELECIONE A AGENCIA
                </option>
                {stores ? (
                  stores.map((data) => (
                    <>
                      <option
                        value={data.id}
                        onChange={(e) => setStore(e.target.value)}
                      >
                        {data.name}
                      </option>
                    </>
                  ))
                ) : (
                  <></>
                )}
              </FormCreateCarSelect>

              <FormCreateCarSelect
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  SELECIONE A MARCA DO CARRO
                </option>
                {brands ? (
                  brands.map((data) => (
                    <>
                      <option value={data.id}>{data.name}</option>
                    </>
                  ))
                ) : (
                  <></>
                )}
              </FormCreateCarSelect>

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
