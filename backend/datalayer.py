import datetime
import pymongo

class Datalayer():
    def __init__(self):
        self.__client = pymongo.MongoClient("localhost" , 27017)
        self.__db = self.__client["reactloginreg"]

    def saveData(self, object):
        object["createdDate"]=str(datetime.datetime.now())
        self.__db.airbnb.insert_one(object)

