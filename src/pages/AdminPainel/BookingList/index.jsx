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


import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function BookingList() {
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

  const [bookingList, setBookingList] = useState();


  async function getAllBooking() {
    try {
      const allBooking = await api.get("/booking");
      setBookingList(allBooking.data.allBookings);

      console.log(allBooking.data)
    } catch (error) {
      console.log(error);
      toast.error("Erro ao carregar a lista de reservas");
    }
  }

  async function deleteBooking(id) {
    try {
      await api.delete(`/booking/${id}`);

      getAllBooking();
    } catch (error) {
      toast.error(error);
    }
  }

  async function getEditBooking(data) {
    setOpenModalEdit(true);
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
    getAllBooking();
  }, []);

  return (
    <>
      <Container>
        

        <Table>
          <TableHead>
            <TableTr>
              <TableTh>ID Reserva</TableTh>
              <TableTh>Data Inicial</TableTh>
              <TableTh>Data Final</TableTh>
              <TableTh>Id Carro</TableTh>
            </TableTr>
          </TableHead>

          <TableBody>
            {bookingList &&
              bookingList.map((data) => (
                <>
                  <TableTr key={data.id}>
                    <TableTd>{data.id}</TableTd>
                    <TableTd>{data.inicialDate}</TableTd>
                    <TableTd>{data.finalDate}</TableTd>
                    <TableTd>{data.carId}</TableTd>
                    <TableTd>
                      <TableButton onClick={() => getEditCar(data)}>
                        <EditIconTable />
                      </TableButton>
                      <TableButton onClick={() => deleteBooking(data.id)}>
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
