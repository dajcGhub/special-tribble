from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(email='test@test.com', username='testuser', password='test1234')
        self.assertEqual(user.email, 'test@test.com')

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name='TestTeam', members=['test@test.com'])
        self.assertEqual(team.name, 'TestTeam')

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        activity = Activity.objects.create(name='Run', user_email='test@test.com', team='TestTeam')
        self.assertEqual(activity.name, 'Run')

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        lb = Leaderboard.objects.create(team='TestTeam', points=10)
        self.assertEqual(lb.team, 'TestTeam')

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name='Pushups', description='Do 20 pushups')
        self.assertEqual(workout.name, 'Pushups')
