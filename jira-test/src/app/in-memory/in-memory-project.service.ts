import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let projects = [
      {id: 1, client: 'cl.claro', jiraId: 'CL.CLARO.2016.011-2', description: 'Roaming Claro en redes WOM', dueDate: '2017-04-28T00:00:00.000Z', state: 'PROD', billingPercentage: 50, billingPossible: 100, comments: 'Hito 2/2: USD 25.000: Hito en Curso', amount: 25000, action: 'Iniciar facturación por segundo 50% -> Ignacio'},
      {id: 2, client: 'co.claro', jiraId: 'CO.CLARO.2016.007-2', description: 'Renovación tecnológica Portal Cautivo', dueDate: '2017-02-27T00:00:00.000Z', state: 'DEPL', billingPercentage: 100, billingPossible: 100, comments: 'Hito 1/: USD 280.000: En Cobranza', amount: null, action: null},
      {id: 3, client: 'cl.mov', jiraId: 'CL.MOVISTAR.2016.001', description: 'Integración GWN a Fullstack', dueDate: '2017-02-07T00:00:00.000Z', state: 'PROD', billingPercentage: 0, billingPossible: 0, comments: 'Hito único USD 71.995 Integración GWN a Fullstack: OC en trámite, fecha estimada recepción OC semana 13 marzo. Fecha estimada facturación = fecha recepción OC + 6 semanas', amount: 71995, action: 'Hacer follow-up en unas semanas -> Roberto'}
    ];
    return {projects};
  }
}
