import http.server, functools

DIR = "/Users/dchinni/Desktop/portfolio/diego website"
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIR)
http.server.ThreadingHTTPServer(("127.0.0.1", 8765), handler).serve_forever()
