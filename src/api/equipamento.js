export class EquipamentoAPI {
  static async getBicicletas() {
    return [
      {
        id: 1,
        marca: "Trek",
        modelo: "Marlin 7",
        ano: "2023",
        numero: 12,
        status: "EM_USO",
      },
      {
        id: 2,
        marca: "Specialized",
        modelo: "Roubaix Sport",
        ano: "2022",
        numero: 7,
        status: "DISPONÍVEL",
      },
      {
        id: 3,
        marca: "Cannondale",
        modelo: "Trail 8",
        ano: "2021",
        numero: 5,
        status: "DISPONÍVEL",
      },
      {
        id: 4,
        marca: "GT",
        modelo: "Avalanche 3.0",
        ano: "2020",
        numero: 8,
        status: "DISPONÍVEL",
      },
      {
        id: 5,
        marca: "Bianchi",
        modelo: "Cz1",
        ano: "2024",
        numero: 3,
        status: "DISPONÍVEL",
      },
      {
        id: 6,
        marca: "Caloi",
        modelo: "Elite Aro 29",
        ano: "2022",
        numero: 10,
        status: "DISPONÍVEL",
      },
    ];
  }
}
