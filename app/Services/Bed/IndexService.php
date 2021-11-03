<?php

namespace App\Services\Bed;

use GuzzleHttp\Client;

class IndexService
{
    private const AUTH_USER = 'user-api-leitos';
    private const AUTH_PASS = 'aQbLL3ZStaTr38tj';

    private const URL = 'https://elastic-leitos.saude.gov.br/leito_ocupacao/_search';

    public function __construct()
    {
        $this->createClient();
    }
    
    public function run(string $city) : array
    {
        $response = $this->client->get(self::URL, [
            'body' => $this->createsJsonBody($city)
        ]);

        return $this->tranformResponse($response);
    }

    private function tranformResponse($response)
    {
        $response = json_decode($response->getBody()->getContents(), true);

        $unidades = $this->generateUnidades($response['hits']['hits']);

        $total = $this->calculateTotal($response['hits']['hits']);

        return [
            'total' => $total,
            'unidades' => $unidades,
        ];
    }

    private function generateUnidades(array $arrayMap = [])
    {
        return array_map(fn($map) => $map['_source'], $arrayMap);
    }

    private function calculateTotal(array $arrayMap = [])
    {
        $total = [];

        $total['ofertaRespiradores'] = 0;
        $total['ofertaHospCli'] = 0;
        $total['ofertaHospUti'] = 0;
        $total['ocupHospUti'] = 0;
        $total['ocupHospCli'] = 0;
        $total['altas'] = 0;
        $total['obitos'] = 0;

        foreach($arrayMap as $array){
            $total['ofertaRespiradores'] += $array['_source']['ofertaRespiradores'] ?? 0;
            $total['ofertaHospCli'] += $array['_source']['ofertaHospCli'] ?? 0;
            $total['ofertaHospUti'] += $array['_source']['ofertaHospUti'] ?? 0;

            $total['ocupHospUti'] += $array['_source']['ocupHospUti'] ?? 0;
            $total['ocupHospCli'] += $array['_source']['ocupHospCli'] ?? 0;

            $total['altas'] += $array['_source']['altas'] ?? 0;
            $total['obitos'] += $array['_source']['obitos'] ?? 0;
        }

        return $total;
    }

    private function createsJsonBody(string $city)
    {
        return json_encode([
            'size'=> 5000,
            'query' => [
                'match' => [
                    'municipio' => $city
                ]
            ]
        ]);
    }

    private function createClient()
    {
        $this->client = new Client([
            'auth' => [ self::AUTH_USER, self::AUTH_PASS ],
            'headers' => [ 'Content-Type' => 'application/json' ]
        ]);
    }
}