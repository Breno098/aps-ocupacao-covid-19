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

        return array_map(function($resp){
            return $resp['_source'];
        }, $response['hits']['hits']);
    }

    private function createsJsonBody(string $city)
    {
        return json_encode([
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