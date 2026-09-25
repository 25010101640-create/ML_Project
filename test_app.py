import pytest
from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_health(client):
    res = client.get('/health')
    assert res.status_code == 200
    assert 'status' in res.json

def test_fields(client):
    res = client.get('/fields')
    assert res.status_code == 200
    assert 'numeric' in res.json

def test_model_info(client):
    res = client.get('/model-info')
    assert res.status_code == 200
    assert 'model' in res.json
