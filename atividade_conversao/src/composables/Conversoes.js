import axios from "axios";

export function usePesos(peso) {
  const gramas = peso * 1000;
  const quilates = peso * 5000;
  const libras = peso * 2.2046;
  const miligramas = gramas * 1000;

  return {
    gramas,
    quilates,
    libras,
    miligramas,
  };
}

export async function useMoedas(valor) {
  const resp = await axios
    .get(
      "https://economia.awesomeapi.com.br/last/BRL-USD,USD-BRL,BRL-EUR,EUR-BRL"
    )
    .then((response) => response.data);

  const brlusd = (resp.BRLUSD.high * valor).toFixed(2);
  const usdbrl = (resp.USDBRL.high * valor).toFixed(2);
  const brleur = (resp.BRLEUR.high * valor).toFixed(2);
  const eurbrl = (resp.EURBRL.high * valor).toFixed(2);

  return {
    brlusd,
    usdbrl,
    brleur,
    eurbrl,
  };
}
