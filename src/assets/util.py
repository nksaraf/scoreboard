import urllib.request
import tqdm

URL = 'http://a.espncdn.com/i/teamlogos/nba/500/{}.png'

team_codes = [
	'atl',
	'bkn',
	'bos',
	'cha',
	'chi',
	'cle',
	'dal',
	'den',
	'det',
	'gs',
	'hou',
	'ind',
	'lac',
	'lal',
	'mem',
	'mia',
	'mil',
	'min',
	'no',
	'ny',
	'okc',
	'orl',
	'phi',
	'phx',
	'por',
	'sa',
	'sac',
	'tor',
	'wsh',
	'utah'
]

def download_logo(code):
	urllib.request.urlretrieve(URL.format(code), "{}.png".format(code.upper()))

for code in tqdm.tqdm(team_codes):
	download_logo(code)
