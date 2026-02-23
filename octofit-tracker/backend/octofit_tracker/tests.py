from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        self.team = Team.objects.create(name="Avengers", universe="Marvel")
        self.user = User.objects.create(name="Tony Stark", email="tony@stark.com", team=self.team)
        self.workout = Workout.objects.create(name="Cardio", description="Run 5km")
        self.activity = Activity.objects.create(user=self.user, activity_type="Running", duration_minutes=30, date="2024-01-01")
        self.leaderboard = Leaderboard.objects.create(team=self.team, total_points=100, rank=1)

    def test_team_str(self):
        self.assertEqual(str(self.team), "Avengers")

    def test_user_str(self):
        self.assertEqual(str(self.user), "Tony Stark")

    def test_activity_str(self):
        self.assertIn("Tony Stark", str(self.activity))

    def test_workout_str(self):
        self.assertEqual(str(self.workout), "Cardio")

    def test_leaderboard_str(self):
        self.assertIn("Avengers", str(self.leaderboard))
