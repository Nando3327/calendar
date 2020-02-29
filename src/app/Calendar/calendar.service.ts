import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CalendarService implements OnInit {

  clickEvent$: Subject<any> = new Subject();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  loadData(item, mode): void {
    this.clickEvent$.next({item: item, mode: mode});
  }

  getWeather(params): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + params.name + '&APPID=f89b76ab38eecff2f27d04ea0ca46f19');
  }

  getCities(): Array<any> {
    const items = mockCities();
    return items.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
}

function mockCities() {
  return [{
    'id': 3652462,
    'name': 'Quito',
    'country': 'EC',
    'coord': {
      'lon': -78.524948,
      'lat': -0.22985
    }
  },
    {
      'id': 7116565,
      'name': 'Mariscal Sucre',
      'country': 'EC',
      'coord': {
        'lon': -78.495468,
        'lat': -0.20522
      }
    },
    {
      'id': 3657509,
      'name': 'Guayaquil',
      'country': 'EC',
      'coord': {
        'lon': -79.900002,
        'lat': -2.16667
      }
    },
    {
      'id': 3660689,
      'name': 'Ambato',
      'country': 'EC',
      'coord': {
        'lon': -78.616753,
        'lat': -1.24908
      }
    },
    {
      'id': 3656049,
      'name': 'Hacienda Santa Rosa',
      'country': 'EC',
      'coord': {
        'lon': -78.449997,
        'lat': -0.36667
      }
    },
    {
      'id': 3651297,
      'name': 'Santo Domingo de los Colorados',
      'country': 'EC',
      'coord': {
        'lon': -79.150002,
        'lat': -0.25
      }
    },
    {
      'id': 3660431,
      'name': 'Provincia del Azuay',
      'country': 'EC',
      'coord': {
        'lon': -79.333328,
        'lat': -3.08333
      }
    },
    {
      'id': 3654157,
      'name': 'Miraflores',
      'country': 'EC',
      'coord': {
        'lon': -78.98333,
        'lat': -2.88333
      }
    },
    {
      'id': 3652941,
      'name': 'Portoviejo',
      'country': 'EC',
      'coord': {
        'lon': -80.449997,
        'lat': -1.05
      }
    },
    {
      'id': 3654667,
      'name': 'Loja',
      'country': 'EC',
      'coord': {
        'lon': -79.204224,
        'lat': -3.99313
      }
    },
    {
      'id': 3650767,
      'name': 'Tarqui',
      'country': 'EC',
      'coord': {
        'lon': -80.73333,
        'lat': -0.95
      }
    },
    {
      'id': 3660130,
      'name': 'Provincia de Bolívar',
      'country': 'EC',
      'coord': {
        'lon': -79.083328,
        'lat': -1.58333
      }
    },
    {
      'id': 3657571,
      'name': 'Guaranda',
      'country': 'EC',
      'coord': {
        'lon': -79,
        'lat': -1.6
      }
    },
    {
      'id': 3658195,
      'name': 'Provincia de El Oro',
      'country': 'EC',
      'coord': {
        'lon': -79.833328,
        'lat': -3.5
      }
    },
    {
      'id': 3652717,
      'name': 'Puerto Pito',
      'country': 'EC',
      'coord': {
        'lon': -79.966667,
        'lat': -3.26667
      }
    },
    {
      'id': 3655673,
      'name': 'Ibarra',
      'country': 'EC',
      'coord': {
        'lon': -78.116669,
        'lat': 0.35
      }
    },
    {
      'id': 3654592,
      'name': 'Provincia de Los Ríos',
      'country': 'EC',
      'coord': {
        'lon': -79.583328,
        'lat': -1.41667
      }
    },
    {
      'id': 3650186,
      'name': 'Vinces',
      'country': 'EC',
      'coord': {
        'lon': -79.73333,
        'lat': -1.55
      }
    },
    {
      'id': 3658766,
      'name': 'Provincia de Cotopaxi',
      'country': 'EC',
      'coord': {
        'lon': -78.833328,
        'lat': -0.83333
      }
    },
    {
      'id': 3651251,
      'name': 'Saquisili',
      'country': 'EC',
      'coord': {
        'lon': -78.666672,
        'lat': -0.83333
      }
    },
    {
      'id': 3652567,
      'name': 'Quevedo',
      'country': 'EC',
      'coord': {
        'lon': -79.449997,
        'lat': -1.03333
      }
    },
    {
      'id': 3654005,
      'name': 'Provincia de Morona Santiago',
      'country': 'EC',
      'coord': {
        'lon': -77.75,
        'lat': -2.5
      }
    },
    {
      'id': 3654541,
      'name': 'Macas',
      'country': 'EC',
      'coord': {
        'lon': -78.116669,
        'lat': -2.31667
      }
    },
    {
      'id': 3659849,
      'name': 'Provincia del Cañar',
      'country': 'EC',
      'coord': {
        'lon': -79,
        'lat': -2.5
      }
    },
    {
      'id': 3653718,
      'name': 'Opar',
      'country': 'EC',
      'coord': {
        'lon': -78.833328,
        'lat': -2.73333
      }
    },
    {
      'id': 3654870,
      'name': 'Latacunga',
      'country': 'EC',
      'coord': {
        'lon': -78.616669,
        'lat': -0.93333
      }
    },
    {
      'id': 3658781,
      'name': 'Cotacachi',
      'country': 'EC',
      'coord': {
        'lon': -78.26667,
        'lat': 0.3
      }
    },
    {
      'id': 3659237,
      'name': 'Provincia del Chimborazo',
      'country': 'EC',
      'coord': {
        'lon': -78.75,
        'lat': -1.91667
      }
    },
    {
      'id': 3652350,
      'name': 'Riobamba',
      'country': 'EC',
      'coord': {
        'lon': -78.633331,
        'lat': -1.66667
      }
    },
    {
      'id': 3653693,
      'name': 'Otavalo',
      'country': 'EC',
      'coord': {
        'lon': -78.26667,
        'lat': 0.23333
      }
    },
    {
      'id': 3650554,
      'name': 'Tosagua',
      'country': 'EC',
      'coord': {
        'lon': -80.25,
        'lat': -0.78333
      }
    },
    {
      'id': 3660418,
      'name': 'Babahoyo',
      'country': 'EC',
      'coord': {
        'lon': -79.51667,
        'lat': -1.81667
      }
    },
    {
      'id': 3653882,
      'name': 'Naranjal',
      'country': 'EC',
      'coord': {
        'lon': -79.616669,
        'lat': -2.66667
      }
    },
    {
      'id': 3653609,
      'name': 'Pajan',
      'country': 'EC',
      'coord': {
        'lon': -80.416672,
        'lat': -1.56667
      }
    },
    {
      'id': 3655131,
      'name': 'La Libertad',
      'country': 'EC',
      'coord': {
        'lon': -80.900002,
        'lat': -2.23333
      }
    },
    {
      'id': 3652758,
      'name': 'Puerto Baquerizo Moreno',
      'country': 'EC',
      'coord': {
        'lon': -89.599998,
        'lat': -0.9
      }
    },
    {
      'id': 7062138,
      'name': 'Provincia de Santa Elena',
      'country': 'EC',
      'coord': {
        'lon': -80.583328,
        'lat': -2.08333
      }
    },
    {
      'id': 3651436,
      'name': 'Cantón Santa Elena',
      'country': 'EC',
      'coord': {
        'lon': -80.866669,
        'lat': -2.23333
      }
    },
    {
      'id': 3651438,
      'name': 'Santa Elena',
      'country': 'EC',
      'coord': {
        'lon': -80.849998,
        'lat': -2.23333
      }
    },
    {
      'id': 3652684,
      'name': 'Pujili',
      'country': 'EC',
      'coord': {
        'lon': -78.683327,
        'lat': -0.95
      }
    },
    {
      'id': 3654064,
      'name': 'Montalvo',
      'country': 'EC',
      'coord': {
        'lon': -79.333328,
        'lat': -1.8
      }
    },
    {
      'id': 3657594,
      'name': 'Guano',
      'country': 'EC',
      'coord': {
        'lon': -78.633331,
        'lat': -1.58333
      }
    },
    {
      'id': 3653890,
      'name': 'Provincia de Napo',
      'country': 'EC',
      'coord': {
        'lon': -77.833328,
        'lat': -0.66667
      }
    },
    {
      'id': 3650721,
      'name': 'Tena',
      'country': 'EC',
      'coord': {
        'lon': -77.816673,
        'lat': -0.98333
      }
    },
    {
      'id': 3658147,
      'name': 'El Progreso',
      'country': 'EC',
      'coord': {
        'lon': -89.547234,
        'lat': -0.89866
      }
    },
    {
      'id': 3659139,
      'name': 'Chone',
      'country': 'EC',
      'coord': {
        'lon': -80.099998,
        'lat': -0.68333
      }
    },
    {
      'id': 3650447,
      'name': 'Tunguipamba',
      'country': 'EC',
      'coord': {
        'lon': -78.533333,
        'lat': -1.16667
      }
    },
    {
      'id': 3653157,
      'name': 'Píllaro Nuevo',
      'country': 'EC',
      'coord': {
        'lon': -78.533333,
        'lat': -1.16667
      }
    },
    {
      'id': 3656412,
      'name': 'Hacienda Punyatsil',
      'country': 'EC',
      'coord': {
        'lon': -78.133331,
        'lat': 0.05
      }
    },
    {
      'id': 3658332,
      'name': 'El Carmen',
      'country': 'EC',
      'coord': {
        'lon': -80.01667,
        'lat': -1.31667
      }
    },
    {
      'id': 3649912,
      'name': 'Zarumaurcu',
      'country': 'EC',
      'coord': {
        'lon': -79.650002,
        'lat': -3.66667
      }
    },
    {
      'id': 3658625,
      'name': 'Cumbayá',
      'country': 'EC',
      'coord': {
        'lon': -78.433327,
        'lat': -0.2
      }
    },
    {
      'id': 3660073,
      'name': 'Buena Fe',
      'country': 'EC',
      'coord': {
        'lon': -79.48333,
        'lat': -0.9
      }
    },
    {
      'id': 3654832,
      'name': 'La Uruguaya',
      'country': 'EC',
      'coord': {
        'lon': -79.833328,
        'lat': -2.2
      }
    },
    {
      'id': 3660798,
      'name': 'Alausi',
      'country': 'EC',
      'coord': {
        'lon': -78.833328,
        'lat': -2.2
      }
    },
    {
      'id': 3651495,
      'name': 'Santa Ana',
      'country': 'EC',
      'coord': {
        'lon': -80.383331,
        'lat': -1.21667
      }
    },
    {
      'id': 3657722,
      'name': 'Guabo',
      'country': 'EC',
      'coord': {
        'lon': -79.849998,
        'lat': -3.25
      }
    },
    {
      'id': 3652516,
      'name': 'Quimshi',
      'country': 'EC',
      'coord': {
        'lon': -78.783333,
        'lat': -2.9
      }
    },
    {
      'id': 3657661,
      'name': 'Gualaquiza',
      'country': 'EC',
      'coord': {
        'lon': -78.550003,
        'lat': -3.4
      }
    },
    {
      'id': 3660422,
      'name': 'Baba',
      'country': 'EC',
      'coord': {
        'lon': -79.666672,
        'lat': -1.78333
      }
    },
    {
      'id': 3650896,
      'name': 'Tabacundo',
      'country': 'EC',
      'coord': {
        'lon': -78.199997,
        'lat': 0.05
      }
    },
    {
      'id': 3651356,
      'name': 'Santa Rosa',
      'country': 'EC',
      'coord': {
        'lon': -79.966667,
        'lat': -3.45
      }
    },
    {
      'id': 3650956,
      'name': 'Sucua',
      'country': 'EC',
      'coord': {
        'lon': -78.166672,
        'lat': -2.46667
      }
    },
    {
      'id': 3659926,
      'name': 'Calceta',
      'country': 'EC',
      'coord': {
        'lon': -80.166672,
        'lat': -0.85
      }
    },
    {
      'id': 3649953,
      'name': 'Provincia de Zamora Chinchipe',
      'country': 'EC',
      'coord': {
        'lon': -78.833328,
        'lat': -4.25
      }
    },
    {
      'id': 3649959,
      'name': 'Zamora',
      'country': 'EC',
      'coord': {
        'lon': -78.956673,
        'lat': -4.06917
      }
    },
    {
      'id': 3650472,
      'name': 'Tulcan',
      'country': 'EC',
      'coord': {
        'lon': -77.716667,
        'lat': 0.8
      }
    },
    {
      'id': 3660559,
      'name': 'Arenillas',
      'country': 'EC',
      'coord': {
        'lon': -80.066673,
        'lat': -3.55
      }
    },
    {
      'id': 3658670,
      'name': 'Cuchucún',
      'country': 'EC',
      'coord': {
        'lon': -78.933327,
        'lat': -2.55
      }
    },
    {
      'id': 3652977,
      'name': 'Pomasqui',
      'country': 'EC',
      'coord': {
        'lon': -78.449997,
        'lat': -0.05
      }
    },
    {
      'id': 3654797,
      'name': 'Lecherón Yargín',
      'country': 'EC',
      'coord': {
        'lon': -78.866669,
        'lat': -2.7
      }
    },
    {
      'id': 3655272,
      'name': 'La Concordia',
      'country': 'EC',
      'coord': {
        'lon': -79.383331,
        'lat': 0
      }
    },
    {
      'id': 3650199,
      'name': 'Vilcabamba',
      'country': 'EC',
      'coord': {
        'lon': -79.25,
        'lat': -4.25
      }
    },
    {
      'id': 3653015,
      'name': 'Playas',
      'country': 'EC',
      'coord': {
        'lon': -80.383331,
        'lat': -2.63333
      }
    },
    {
      'id': 3655951,
      'name': 'Hacienda Targuarcocha',
      'country': 'EC',
      'coord': {
        'lon': -79.816673,
        'lat': -3.78333
      }
    },
    {
      'id': 3650053,
      'name': 'Yantzaza',
      'country': 'EC',
      'coord': {
        'lon': -78.759438,
        'lat': -3.82778
      }
    },
    {
      'id': 3654055,
      'name': 'Montecristi',
      'country': 'EC',
      'coord': {
        'lon': -80.666672,
        'lat': -1.05
      }
    },
    {
      'id': 3658396,
      'name': 'Echeandía',
      'country': 'EC',
      'coord': {
        'lon': -79.26667,
        'lat': -1.43333
      }
    },
    {
      'id': 3651245,
      'name': 'Saraguro',
      'country': 'EC',
      'coord': {
        'lon': -79.216667,
        'lat': -3.6
      }
    },
    {
      'id': 3653938,
      'name': 'Musmus',
      'country': 'EC',
      'coord': {
        'lon': -78.76667,
        'lat': -2.93333
      }
    },
    {
      'id': 3655869,
      'name': 'Hacienda Villacís',
      'country': 'EC',
      'coord': {
        'lon': -78.333328,
        'lat': -0.05
      }
    },
    {
      'id': 3649914,
      'name': 'Zaruma',
      'country': 'EC',
      'coord': {
        'lon': -79.616669,
        'lat': -3.68333
      }
    },
    {
      'id': 3830306,
      'name': 'Provincia de Francisco de Orellana',
      'country': 'EC',
      'coord': {
        'lon': -76.416672,
        'lat': -0.75
      }
    },
    {
      'id': 3652743,
      'name': 'Puerto Francisco de Orellana',
      'country': 'EC',
      'coord': {
        'lon': -76.966667,
        'lat': -0.46667
      }
    },
    {
      'id': 3651093,
      'name': 'Shushufindi',
      'country': 'EC',
      'coord': {
        'lon': -77.066673,
        'lat': -0.03333
      }
    },
    {
      'id': 3651546,
      'name': 'San Pedro de la Bendita',
      'country': 'EC',
      'coord': {
        'lon': -79.416672,
        'lat': -3.93333
      }
    },
    {
      'id': 3659599,
      'name': 'Catamayo',
      'country': 'EC',
      'coord': {
        'lon': -79.349998,
        'lat': -3.98333
      }
    },
    {
      'id': 3649966,
      'name': 'Zámbiza',
      'country': 'EC',
      'coord': {
        'lon': -78.433327,
        'lat': -0.15
      }
    },
    {
      'id': 3651411,
      'name': 'Santa Lucia',
      'country': 'EC',
      'coord': {
        'lon': -80,
        'lat': -2.18333
      }
    }];
}
