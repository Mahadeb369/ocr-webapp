import requests


class LocalWebsocketClient:
    def post_to_connection(self, Data=None, ConnectionId=None):
        requests.post(
            f'http://localwsserver:8081/{ConnectionId}', data=Data, headers={'Content-type': 'application/json'}
        )
