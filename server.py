from http.server import SimpleHTTPRequestHandler, HTTPServer
from pathlib import Path
ROOT = Path(__file__).resolve().parent
PORT = 8000
class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
if __name__ == '__main__':
    print(f'Serving {ROOT} on http://localhost:{PORT}')
    HTTPServer(('0.0.0.0', PORT), Handler).serve_forever()
