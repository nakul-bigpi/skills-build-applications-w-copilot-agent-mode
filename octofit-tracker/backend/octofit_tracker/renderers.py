from rest_framework.renderers import JSONRenderer
from rest_framework.utils.encoders import JSONEncoder as DRFJSONEncoder
from bson import ObjectId


class MongoJSONEncoder(DRFJSONEncoder):
    """Extends DRF's JSON encoder to handle MongoDB ObjectId types."""
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)


class MongoJSONRenderer(JSONRenderer):
    """Custom JSON renderer that serializes MongoDB ObjectId fields."""
    encoder_class = MongoJSONEncoder
